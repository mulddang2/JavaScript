// function solution(s1, s2) {
// var answer = 0;
// for (let i = 0; i < s1.length; i++) {
// for (let j = 0; j < s2.length; j++) {
// if (s1[i] === s2[j]) {
// answer += 1;
// }
// }
// }
// return answer;
// }

function OneDivision(s) {
    let row = "";

    for (let i = 0; i < s.length; i++) {
        row += s[i] + " ";
    }

    console.log(row);

    console.log();
    console.log();
}

function TwoDivision(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        let row = "";

        for (let j = 0; j < s2.length; j++) {
            row += s1[i] + s2[j] + " ";
        }

        console.log(row);
    }
}

function ThreeDivision(s1, s2, s3) {
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            let row = "";
            for (let k = 0; k < s3.length; k++) {
                row += s1[i] + s2[j] + s3[k] + " ";
            }

            console.log(row);
        }

        console.log()
    }
}

const i = [1, 2, 3, 4, 5, 6];
const j = ["A", "B", "C", "D", "E", "F"];
const k = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ"];

// OneDivision(j);

// TwoDivision(i, j);

ThreeDivision(i, j, k);
