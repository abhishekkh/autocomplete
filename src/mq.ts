const completionSpec: Fig.Spec = {
  name: "mq",
  description: "MQ CLI",
  subcommands: [
    {
      name: "aws-profile",
      description: "Set the aws profile for dev,qa,prod",
      options: [
        {
          name: "list",
          description: "List available profiles",
        },
        {
          name: "set-default",
          description: "Set-default <human-readable name>",
        },
        {
          name: "login",
          description: "Login for AWS Profiles",
        },
        {
          name: "--help",
          description: "Help",
        },
      ],
    },
    {
      name: "aws-shell",
      description: "Execute arbitary command with aws credential",
      options: [
        {
          name: "--help",
          description: "Help for aws-shell",
        },
        {
          name: "--profile",
          description: "The human-readable name of the AWS profile to use",
        },
      ],
    },
    {
      name: "kube",
      description: "Wrapper for kubectl CLI",
      subcommands: [
        {
          name: "--",
          description: "Kubectl command",
          loadSpec: "kubectl",
        },
      ],
    },
    {
      name: "aws",
      description: "Wrapper for aws CLI",
      subcommands: [
        {
          name: "--",
          description: "Aws command",
          loadSpec: "aws",
        },
      ],
    },
    {
      name: "terraform",
      description: "Wrapper for terraform CLI",
      subcommands: [
        {
          name: "--",
          description: "Terraform command",
          loadSpec: "terraform",
        },
      ],
    },
  ],
};

export default completionSpec;
