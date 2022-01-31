const completionSpec: Fig.Spec = {
  name: "vault",
  description: "Vault CLI",
  subcommands: [
    {
      name: "login",
      description: "Login to vault and fetch new token",
      options: [
        {
          name: "-method",
          description: "Mfa method",
          insertValue: "-method=okta",
          args: {
            name: "okta",
            description: "Mfa method okta",
            isOptional: false,
          },
        },
      ],
    },
  ],
};

export default completionSpec;
