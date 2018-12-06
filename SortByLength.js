(function sortByLength(arr) {
    let splited = arr.map(x => [...x])
    let sorted = splited.sort((a,b)=>a.length - b.length)
    return sorted.map(x => x.join(''))
})(["Google", "Apple", "Microsoft"])