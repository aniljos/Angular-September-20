import { Product } from '../model/product';
import { ProductFilterPipe } from './product-filter.pipe';

fdescribe('ProductFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it("return the input for an empty search", () => {

    const pipe = new ProductFilterPipe();
    const input = [new Product(1, "abc", 2000, "desc1"), 
            new Product(2, "abc1", 3000, "desc2"), new Product(3, "abc3", 3000, "desc3")]
    const output = pipe.transform(input, "");

    expect(output).toBe(input);

  })

  it("return the filtered array for an non-empty search", () => {

    const pipe = new ProductFilterPipe();
    const input = [new Product(1, "abc", 2000, "desc1"), 
            new Product(2, "abc1", 3000, "desc2"), new Product(3, "abc3", 3000, "desc3")]
    const output = pipe.transform(input, "abc1");
    expect(output.length).toBe(1);

  })

});
