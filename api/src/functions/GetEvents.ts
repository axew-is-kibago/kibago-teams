import { app, input } from '@azure/functions';

// The input binding executes the `select * from Products where Cost = @Cost` query, returning the result as json object in the body.
// The *parameters* argument passes the `{cost}` specified in the URL that triggers the function,
// `getproducts/{cost}`, as the value of the `@Cost` parameter in the query.
// *commandType* is set to `Text`, since the constructor argument of the binding is a raw query.
const sqlInput = input.generic({
    type: 'sql',
    commandText: 'select * from Events,Users where Events.fb_uid = Users.fb_uid',
    commandType: 'Text',
    // parameters: '@Event={event}',
    connectionStringSetting: 'SqlConnectionString'
})

app.http('GetEvents', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    // route: 'geteventss/{event}',
    extraInputs: [sqlInput],
    handler: async (request, context) => {
        const products = JSON.stringify(context.extraInputs.get(sqlInput));

        return {
            status: 200,
            body: products
        };
    }
});
