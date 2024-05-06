
import { Session } from '@supabase/supabase-js'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { db } from './lib/supabase';

export interface AuthContext {
    session : Session | null
}

const AuthContext = React.createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
        db.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
        });
        const {
          data: { subscription },
        } = db.auth.onAuthStateChange((_event, session) => {
          setSession(session);
        });
        return () => subscription.unsubscribe();
      }, []);
  return (
    <AuthContext.Provider value={{session}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}


