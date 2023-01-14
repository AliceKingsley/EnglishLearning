export default class GetServices {

    static async getData() {
        const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
        const data = await response.json();

        return data;
    }
}