module.exports= {
    delete: {
        tags: [
            "Jobs"
        ],
        summary: "Delete Job",
        operationId: "DeleteJob",
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
