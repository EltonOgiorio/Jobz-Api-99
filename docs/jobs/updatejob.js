module.exports = {
    patch: {
        tags: [
            "Jobs"
        ],
        summary: "Update Job",
        operationId: "UpdateJob",
        parameters: [
            {
                name: "id",
                in: "path",
                schema:{
                    type: "string",
                },
                required: true,
                description: "The Job ID"
            },
        ],
        requestBody: {
            description: '',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UpdateJobRequest"
                    },
                    example: {
                        company: "Google",
                        position: "Frontend Developer",
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
    }
}