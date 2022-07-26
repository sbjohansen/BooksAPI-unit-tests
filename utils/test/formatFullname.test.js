const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullname" arg is not as string', () => {
        if (typeof fullname !== 'string') return 'Error';
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () {})).to.equal('Error');
    });
    it('should return an error if "formatFullName" arg length is 0', () => {
        expect(formatFullname()).to.equal('Error');
    });
    it('should return good formatted "formatFullName" if proper args', () => {
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('johN dOe')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
    });
    it('should return an error if "formatFullName" one of blocks length is 0', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
    });
    it('should return an error if "formatFullName" have more than 2 blocks', () => {
        expect(formatFullname('John Doe Smith')).to.equal('Error');
    });
    
});
