import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Card from '@/components/Card.vue'

describe('Card.vue', () => {
  it('renders card title and content', () => {
    const title = 'Card Title'
    const subTitle = 'Card Content'
    const wrapper = shallowMount(Card, {
      propsData: { title, subTitle }
    })
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(subTitle)
  })
})
