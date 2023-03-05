module.exports = {
    post: {
        tags: [
            "Jobs"
        ],
        summary: "Create Job",
        operationId: "CreateJob",
        parameters: [],
        requestBody: {
            description: '',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/createJobRequest"
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
    },
}