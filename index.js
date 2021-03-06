const DEFAULT_SEPARATORS = ['\\.','-'];

function newComparer (separators=DEFAULT_SEPARATORS) {
    return (a,b) => {
        let splitter = new RegExp(separators.join('|'), 'g');
        let pa = a.split(splitter);
        let pb = b.split(splitter);
        for (var i = 0; i < Math.min(pa.length,pb.length); i++) {
            var na = Number(pa[i]);
            var nb = Number(pb[i]);
            if (na > nb) return 1;
            if (nb > na) return -1;
            if (!isNaN(na) && isNaN(nb)) return 1;
            if (isNaN(na) && !isNaN(nb)) return -1;
        }
        if(pa.length > pb.length){
            return 1;
        }
        if(pb.length > pa.length){
            return -1;
        }
        return 0;
    }
}

function cmp (a,b){
    return newComparer()(a,b)
}

module.exports ={ 
    newComparer: newComparer,
    cmp: cmp
}
