{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.corepack
  ];
  env = {};
  idx = {
    # Uncomment any of those if you want to use this extensions for your workspace.
    extensions = [
      # "bradlc.vscode-tailwindcss"
      # "esbenp.prettier-vscode"
      # "dbaeumer.vscode-eslint"
      # "YoavBls.pretty-ts-errors"
      # "usernamehw.errorlens"
      # "aaron-bond.better-comments"
      # "wix.vscode-import-cost"
    ];

    workspace = {
      onStart = {
        install-dependencies = "pnpm install";
        # build-project = "pnpm build";
      };
    };
  };
}
