module.exports= {
    get: {
        tags: [
            "Jobs"
        ],
        summary: "Get Single Job",
        operationId: "GetSingleJob",
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
        responses: {
            200: {
                description: '',
                headers: {},
            },
        deprecated: false,
        },
    },
}
