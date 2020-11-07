module.exports = function(controller) {
    //Nó như default reply 
    //case nào chưa định nghĩa thì chạy vào đây
    controller.on('message_received', function(bot, message) {

        bot.reply(message, {
            text: 'I’m going to investigate that futher.',
            quick_replies: [
                {
                  title: 'Help',
                  payload: 'help',
                },
              ]
        });

    });

}