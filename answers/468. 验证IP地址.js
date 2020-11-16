/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    const ip4 = IP.split('.');
    const ip6 = IP.split(':');
    if (ip4.length === 4 && ip4.every(e => +e <= 255 && (+e).toString() === e )) {
        return 'IPv4';
    }

    if (ip6.length === 8 && ip6.every(e => e.length <= 4 && e.length > 0 && !/[^0-9a-fA-F]/.test(e))) {
        return 'IPv6';
    }

    return 'Neither';
};