import { app, HttpRequest, HttpResponseInit, InvocationContext, output } from "@azure/functions";

const sqlOutput = output.generic({
    type: 'sql',
    commandtext: 'User_profile',
    connectionStringSetting: 'SqlConnectionString'
})

export async function addProfile(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const product = await request.json()
    context.log("😛: ", product)
    context.extraOutputs.set(sqlOutput, product);

    return {
        status: 201,
        body: JSON.stringify(product)
    };

}

app.http('addProfile', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    extraOutputs: [sqlOutput],
    handler: addProfile
});
