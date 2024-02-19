//
// Written by Su386and J10a1n15.
// See LICENSE for copyright and license notices.
//


export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/**
 * @param {number} number - The numeric value determining plurality.
 * @param {string} string - The base string to be pluralized.
 * @returns {string} - A grammatically correct pluralized string with the number at the front.
 */
export function pluralize(number: number, string: string): string {
    return `${number} ${number === 1 ? string : string + 's'}`;
}