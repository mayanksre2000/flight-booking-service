const cron = require('node-cron');

const { BookingService } = require('../../services');

function scheduleCrons() {
    cron.schedule('*/30 * * * *', async () => {  //to make sure that after 30 min if its still in pending -cancel
        await BookingService.cancelOldBookings();
    });
}

module.exports = scheduleCrons;
