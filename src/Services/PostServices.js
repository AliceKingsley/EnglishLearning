export default class PostServices {

    static async deleteData(id, form) {
        try {
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: form
            });
            const data = await response.status;
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        } 
    }

    static async changeData(id, form) {
        console.log(form);
        try {
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: form
            });
            const data = await response.status;
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    static async addData(form) {
        try {
            // TODO добавить форму добавления нового слова и обработать
        } catch (error) {
            console.error(error);
        }
    }

}