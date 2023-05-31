Приложение для генерации картинок при помощи искуственного интелекта Open AI. (https://openai.com/)
Для использования необходимо зарегистрироваться на (https://openai.com/) и получить свой secret key.
Для работы необходима Node.js
После этого скачать проект, установить зависимости (npm init в терминале), в папке с проектом создать папку config и файл
default.json.
В файле необходимо добавить следующее:
{
    "OPENAI_KEY": "ВАШ SECRET KEY"
}

Далее запустить приложении командой в терминале npm run start.


An application for generating images using Open AI API. (https://openai.com/)
For use, you need to register on (https://openai.com/) and get your secret key.
Requires Node.js to work
After that, download the project, install the dependencies (npm init in the terminal), create the config folder in the project folder and the file
default.json in it.
You need to add the following to the file:
{
    "OPENAI_KEY": "YOUR SECRET KEY"
}

Next, run the application with the npm run start command in the terminal
