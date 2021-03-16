//longest executive sequence


//remove any duplicate using a set - o(n)
const longestConsStreak = (nums) => {
    let set = new Set();

    for(num of nums) {
        set.add(num)
    }


    let longestStreak = 0;

    for(num of set) {
        if(!set.has(num - 1)) {
            let curr_num = num;
            let curr_streak = 1;

            while(set.has(curr_num + 1)) {
                curr_streak+=1;
                curr_num+=1
            }

            longestStreak = Math.max(longestStreak, curr_streak)
        }
    }
}

