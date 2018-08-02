class RowUtils {
    static numToSeparatedDigits(numString) {
        if (numString) {
            var parts = numString.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (parts.length > 1) {
                parts[1] = parts[1].slice(0, 2);
            }
            return parts.join(".");
        }
    }

    static numToUsd(numString) {
        return "$" + this.numToSeparatedDigits(numString);
    }

    static numToUsdInteger(numString) {
        return "$" + this.numToSeparatedDigits(parseInt(numString));
    }
}

export default RowUtils;