import { app, HttpRequest, HttpResponseInit, InvocationContext, output } from "@azure/functions";

const sqlOutput = output.generic({
    type: 'sql',
    commandtext: 'Users',
    connectionStringSetting: 'SqlConnectionString'
})

export async function addUser(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const product = await request.body
    context.log("😇: ", product)
    context.extraOutputs.set(sqlOutput, product);

    return {
        status: 201,
        body: JSON.stringify(product)
    };

}

app.http('addUser', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    extraOutputs: [sqlOutput],
    handler: addUser
});
