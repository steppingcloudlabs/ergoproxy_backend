module.exports = () => {
    /**
     * Update Leave Management services
     * @params {String} userid
     * @params {Object} payload  
     */
    const getleave = payload => {
        return new Promise(async(resolve, reject) => {
            try {
                resolve({ payload, });
            } catch (error) {
                reject(error);
            }
        })
    }
    const applyleave = payload => {
        return new Promise(async(resolve, reject) => {
            try {
                resolve({ payload });
            } catch (error) {
                reject(error);
            }
        })
    }
    return {
        getleave,
        applyleave
    }
};