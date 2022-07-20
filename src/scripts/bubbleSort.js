const bubbleSort = (data) => {
    for (let j = data.length - 1; j > 0; j--) {
        // let arr =[];
        for (let i = 0; i < j; i++) {
            if (data[i].name > data[i + 1].name) {
                const swap = data[i];
                data[i] = data[i + 1];
                data[i + 1] = swap;
            }
        }
        // arr.push(data);
        //   return arr.flat();
    }
};

export {bubbleSort}