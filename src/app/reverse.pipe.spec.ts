import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the argument reversed', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('Sabina')).toEqual('anibaS');
    expect(pipe.transform('Maria')).toEqual('airaM');
    expect(pipe.transform(null)).toEqual('');
  });
});
