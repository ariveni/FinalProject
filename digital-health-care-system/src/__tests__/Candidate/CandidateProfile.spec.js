import { shallowMount } from "@vue/test-utils";
import CandidateProfile from "@/__tests__/__mocks__/CandidateProfile.vue";
import { describe, it , expect, vi} from "vitest";
import UserNavigation from '@/components/UserNavigation.vue';
import { Field, Form } from "vee-validate";
import { useStore } from "vuex";
//import axios from '../../api.js';
describe('CandidateProfile',() => {
  it('Candidate Update form', async() => {
    const wrapper = shallowMount(CandidateProfile);
    let text = 'Edit your profile'
    expect(wrapper.text()).toMatch(text)
    
    expect(wrapper.findComponent(UserNavigation).exists( )).toBeTruthy();

    const form =  wrapper.findComponent(Form)
    expect(form.exists()).toBe(true)
  })
})