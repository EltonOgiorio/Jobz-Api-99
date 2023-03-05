module.exports = {
    post: {
        tags: [
            "Auth"
        ],
        summary: "Login User",
        operationId: "LoginUser",
        parameters: [],
        requestBody: {
            description: '',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/LoginUserRequest"
                    },
                    example: {
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
    },
}