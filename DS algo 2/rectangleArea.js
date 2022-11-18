function computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let lengthA = ax2 - ax1;
    let heightA = ay2 - ay1;
    let lengthB = bx2 - bx1;
    let heightB = by2 - by1;

    let areaA = lengthA * heightA;
    let areaB = lengthB * heightB;

    let length = Math.min(ax2,bx2) - Math.max(ax1,bx1);
    let height = Math.min(ay2,by2) - Math.max(ay1,by1);

    let commonArea = length > 0 && height > 0 ? length * height : 0;

    return areaA + areaB - commonArea; 
}

