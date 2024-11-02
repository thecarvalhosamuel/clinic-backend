import { describe, expect, it } from 'vitest'
import { Cuid } from './cuid';
import cuid2 from '@paralleldrive/cuid2';

describe('Cuid suit testes', () => {
  it('Should create a new Cuid', () => {
    const id = Cuid.create()
    expect(id.value).toBeDefined();
  });

  it('Should create a new Cuid with a value', () => {
    const id = new Cuid({ value: cuid2.createId() })
    expect(id.value).toBeDefined();
  });
});