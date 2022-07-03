import  {StatusCodes} from '../src'


test('HTTP_100_CONTINUE', () => {
    expect(StatusCodes.HTTP_100_CONTINUE).toBe(100);
});






test('HTTP_200_OK', () => {
    expect(StatusCodes.HTTP_200_OK).toBe(200);
});
