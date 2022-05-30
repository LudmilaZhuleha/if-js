//Create a curry function that receives 2 parameters amd make sum of them like sum(x)(y);
const sum = (x) => {
    return (y) => {
        return x + y;
    };
};

export {sum};
