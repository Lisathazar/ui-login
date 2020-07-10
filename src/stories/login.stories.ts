import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { LoginComponent } from 'projects/login/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';


export default {
    title: 'Login',
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
                // imports both components to allow component composition with storybook
            declarations: [LoginComponent],
            imports: [CommonModule, ReactiveFormsModule],
        }),
    ],
};


export const Default = () => ({
  component: LoginComponent,
});
