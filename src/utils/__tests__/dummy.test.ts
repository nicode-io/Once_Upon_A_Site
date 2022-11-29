import type * as Dummy from '../dummy';

const {dummyFunction} = jest.requireActual<typeof Dummy>('../dummy');

describe('silly function', () => {
	test('guaranteed random', () => {
		expect(dummyFunction(4)).toBe(2);
	});
});

// Make the isolatedModules config happy
export {};
