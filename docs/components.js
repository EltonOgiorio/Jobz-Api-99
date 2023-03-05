module.exports = {
  components: {
    schemas: {
      RegisterUserRequest: {
        title: "RegisterUserRequest",
        required: [
          "name",
          "email",
          "password",
        ],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
       example: {
        name: "Bob",
        email: "bob@gmail.com",
        password: "secret",
       }
      },
      LoginUserRequest: {
        title: "LoginUserRequest",
        required: [
          "email",
          "password",
        ],
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
        example: {
          email: "bob@gmail.com",
          password: "secret",
        },
      },
      CreateJobRequest: {
        title: "CreateJobRequest",
        required: [
          "company",
          "position",
        ],
        type: "object",
        properties: {
          company: {
            type: "string",
          },
          position: {
            type: "string",
          },
        },
        example: {
          company: "Google",
          position: "Frontend Developer",
        },
      },
      UpdateJobRequest: {
        title: "UpdateJobRequest",
        required: [
          "company",
          "position"
        ],
        type: "object",
        properties: {
          company: {
            type: "string",
          },
          position: {
            type: "string",
          },
        },
        example: {
          company: "Google",
          position: "Frontend Developer",
        },
      },
    },
    securitySchemes: {
      httpBearer: {
        type: "http",
        scheme: "bearer"
      },
    },
  },
  security: [
    {
      httpBearer: '[]',
  } 
  ]
}

