/**
 * Based on the Qty of votes calculate the percent
 * @param {number} votes
 * @param {number} totalvotes
 * @return {string} percevalue
 */
export const calculatePercent= (votes, totalvotes) =>{
    const percevalue =  isNaN( parseInt( ((parseInt(votes,10) * 100)/ totalvotes), 10 ).toFixed(4) )? 0 : ((parseInt(votes,10) * 100)/ totalvotes).toFixed(4);
    return percevalue;
};

/**
 * Given array of choices return the total of votes
 * @param {Object[]} choiseArray - array of choices
 * @return {number} sum - sum of total votes
 */
export const totalVotes= (choiseArray) =>{
    let sum=0;
    for (let i=0; i < choiseArray.length; i++){
        sum+= choiseArray[i].votes;
    }
    return sum;
};

/**
 * Given a string split the parameter and return the value of  choices
 * @param {string} url - string contain the question and choice
 * @return {string} arrayOfStrings[4] - return the value for choices
 */
export const choiceNumber= (url) =>{
    let arrayOfStrings = url.split('/');
    return arrayOfStrings[4];
};


/**
 * return all choices as a string
 * @param {Object[]} textchoises - array with choices
 * @return {string} arrayOfStrings
 */
export const buildChoices= (textchoises) =>{
    let arrayOfStrings = textchoises.split(',');
    return JSON.stringify(arrayOfStrings);
};