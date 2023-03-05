module.exports = {
    post: {
        tags: [
            "Auth"
        ],
        summary: "Register User",
        operationId: "RegisterUser",
        parameters: [],
        requestBody: {
            description: '',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/RegisterUserRequest"
                    },
                    example: {
                        name: "Bob",
                        email: "bob@gmail.com",
                        password: "secret",
                    },
                },
            },
            required: true,
        },
        responses: {
            200: {
                description: '',
                headers: {},
            },
        },
        deprecated: false,
        security: [],
    }
}
