import { app, input } from '@azure/functions';

/**
 * イベントを取得する関数
 */
const sqlInput = input.generic({
    type: 'sql',
    commandText: 'select * from Events,Users where Events.fb_uid = Users.fb_ui',
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
