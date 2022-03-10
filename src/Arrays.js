/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let masNumber = data.split(',');
    for (let i = 0; i < masNumber.length; i++) {
        masNumber[i] = parseInt(masNumber[i]);
    }
    for (let j = masNumber.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (masNumber[i] > masNumber[i + 1]) {
                let temp = masNumber[i];
                masNumber[i] = masNumber[i + 1];
                masNumber[i + 1] = temp;
            }
        }
    }
    for (let i = 0; i < masNumber.length; i++) {
        masNumber[i] = masNumber[i].toString();
    }
    masNumber = masNumber.join();
    return masNumber;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] < 100) {
            result.push(data[i]);
        }
    }
    return result;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let result = [];
    let j = 0,
        k = 0;
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            result[i] = array1[j];
            j++;
        } else {
            result[i] = array2[k];
            k++;
        }
    }
    return result;
}
