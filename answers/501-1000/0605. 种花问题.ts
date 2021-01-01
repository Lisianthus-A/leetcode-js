function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let flower = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
             flower++;
             flowerbed[i] = 1;
        }
    }

    return flower >= n;
};