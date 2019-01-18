module.exports = {
    Node: {
        __resolveType(obj){
            if (obj.location) return 'School';
            if (obj.school_name) return 'Teacher';
            return null
        }
    }
}