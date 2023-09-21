import { app, HttpRequest, HttpResponseInit, InvocationContext, output } from "@azure/functions";

const sqlOutput = output.generic({
    type: 'sql',
    commandtext: 'Events',
    connectionStringSetting: 'SqlConnectionString'
})

export async function addEvent(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
<<<<<<< HEAD
    const product = await request.json();
=======
    const product = await request.json()
>>>>>>> 19b321e64b5d99222d9716ce07c968f24f3c3349
    context.log("😇: ", product)
    context.extraOutputs.set(sqlOutput, product);

    return {
        status: 201,
        body: JSON.stringify(product)
    };

}

app.http('addEvent', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    extraOutputs: [sqlOutput],
    handler: addEvent
});
