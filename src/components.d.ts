/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MenuItem,
} from './interfaces/MenuItem';
import {
  WgFile,
} from './interfaces/WgFile';
import {
  EventEmitter,
} from '@stencil/core';
import {
  WizardStep,
} from './interfaces/Wizard';

export namespace Components {
  interface AppContainer {}
  interface AppMenu {
    'hamburgerMaxWidth'?: number;
    'itemRenderer'?: string;
    'menuItems'?: MenuItem[];
  }
  interface DropdownRenderer {
    'active': boolean;
    'somethingChanged': boolean;
    'url': any;
  }
  interface PskAppRouter {
    'menuItems'?: MenuItem[];
  }
  interface PskAttachmentsList {
    'files': WgFile[];
  }
  interface PskButton {
    'buttonClass': string;
    'disabled': boolean;
    'eventData': any;
    'eventEmitter': EventEmitter;
    'label': string;
  }
  interface PskFilesChooser {
    'accept'?: string;
    'label': string;
    'onFilesChange'?: Function;
    'onFilesSelect'?: Function;
  }
  interface PskListFeedbacks {
    'hour': number;
    'messagesToDisplay': number;
    'minute': number;
    'second': number;
  }
  interface PskMenuItemRenderer {
    'active': boolean;
    'value': MenuItem;
  }
  interface PskModal {
    'opened': boolean;
  }
  interface PskPageNotFound {
    'basePath': string;
    'urlDestination'?: string;
  }
  interface PskPinPopup {
    'opened': boolean;
  }
  interface PskUiFeedback {
    'message': any;
    'opened': boolean;
    'timeMeasure': string;
    'timeSinceCreation': number;
    'typeOfAlert': string;
  }
  interface PskUiLoader {
    'shouldBeRendered': boolean;
  }
  interface PskUserProfile {
    'profileRenderer': any;
    'userInfo': any;
  }
  interface PskUserProfileRenderer {
    'userInfo': any;
  }
  interface PskWizard {
    'wizardSteps'?: WizardStep[];
  }
}

declare global {


  interface HTMLAppContainerElement extends Components.AppContainer, HTMLStencilElement {}
  var HTMLAppContainerElement: {
    prototype: HTMLAppContainerElement;
    new (): HTMLAppContainerElement;
  };

  interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {}
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };

  interface HTMLDropdownRendererElement extends Components.DropdownRenderer, HTMLStencilElement {}
  var HTMLDropdownRendererElement: {
    prototype: HTMLDropdownRendererElement;
    new (): HTMLDropdownRendererElement;
  };

  interface HTMLPskAppRouterElement extends Components.PskAppRouter, HTMLStencilElement {}
  var HTMLPskAppRouterElement: {
    prototype: HTMLPskAppRouterElement;
    new (): HTMLPskAppRouterElement;
  };

  interface HTMLPskAttachmentsListElement extends Components.PskAttachmentsList, HTMLStencilElement {}
  var HTMLPskAttachmentsListElement: {
    prototype: HTMLPskAttachmentsListElement;
    new (): HTMLPskAttachmentsListElement;
  };

  interface HTMLPskButtonElement extends Components.PskButton, HTMLStencilElement {}
  var HTMLPskButtonElement: {
    prototype: HTMLPskButtonElement;
    new (): HTMLPskButtonElement;
  };

  interface HTMLPskFilesChooserElement extends Components.PskFilesChooser, HTMLStencilElement {}
  var HTMLPskFilesChooserElement: {
    prototype: HTMLPskFilesChooserElement;
    new (): HTMLPskFilesChooserElement;
  };

  interface HTMLPskListFeedbacksElement extends Components.PskListFeedbacks, HTMLStencilElement {}
  var HTMLPskListFeedbacksElement: {
    prototype: HTMLPskListFeedbacksElement;
    new (): HTMLPskListFeedbacksElement;
  };

  interface HTMLPskMenuItemRendererElement extends Components.PskMenuItemRenderer, HTMLStencilElement {}
  var HTMLPskMenuItemRendererElement: {
    prototype: HTMLPskMenuItemRendererElement;
    new (): HTMLPskMenuItemRendererElement;
  };

  interface HTMLPskModalElement extends Components.PskModal, HTMLStencilElement {}
  var HTMLPskModalElement: {
    prototype: HTMLPskModalElement;
    new (): HTMLPskModalElement;
  };

  interface HTMLPskPageNotFoundElement extends Components.PskPageNotFound, HTMLStencilElement {}
  var HTMLPskPageNotFoundElement: {
    prototype: HTMLPskPageNotFoundElement;
    new (): HTMLPskPageNotFoundElement;
  };

  interface HTMLPskPinPopupElement extends Components.PskPinPopup, HTMLStencilElement {}
  var HTMLPskPinPopupElement: {
    prototype: HTMLPskPinPopupElement;
    new (): HTMLPskPinPopupElement;
  };

  interface HTMLPskUiFeedbackElement extends Components.PskUiFeedback, HTMLStencilElement {}
  var HTMLPskUiFeedbackElement: {
    prototype: HTMLPskUiFeedbackElement;
    new (): HTMLPskUiFeedbackElement;
  };

  interface HTMLPskUiLoaderElement extends Components.PskUiLoader, HTMLStencilElement {}
  var HTMLPskUiLoaderElement: {
    prototype: HTMLPskUiLoaderElement;
    new (): HTMLPskUiLoaderElement;
  };

  interface HTMLPskUserProfileElement extends Components.PskUserProfile, HTMLStencilElement {}
  var HTMLPskUserProfileElement: {
    prototype: HTMLPskUserProfileElement;
    new (): HTMLPskUserProfileElement;
  };

  interface HTMLPskUserProfileRendererElement extends Components.PskUserProfileRenderer, HTMLStencilElement {}
  var HTMLPskUserProfileRendererElement: {
    prototype: HTMLPskUserProfileRendererElement;
    new (): HTMLPskUserProfileRendererElement;
  };

  interface HTMLPskWizardElement extends Components.PskWizard, HTMLStencilElement {}
  var HTMLPskWizardElement: {
    prototype: HTMLPskWizardElement;
    new (): HTMLPskWizardElement;
  };
  interface HTMLElementTagNameMap {
    'app-container': HTMLAppContainerElement;
    'app-menu': HTMLAppMenuElement;
    'dropdown-renderer': HTMLDropdownRendererElement;
    'psk-app-router': HTMLPskAppRouterElement;
    'psk-attachments-list': HTMLPskAttachmentsListElement;
    'psk-button': HTMLPskButtonElement;
    'psk-files-chooser': HTMLPskFilesChooserElement;
    'psk-list-feedbacks': HTMLPskListFeedbacksElement;
    'psk-menu-item-renderer': HTMLPskMenuItemRendererElement;
    'psk-modal': HTMLPskModalElement;
    'psk-page-not-found': HTMLPskPageNotFoundElement;
    'psk-pin-popup': HTMLPskPinPopupElement;
    'psk-ui-feedback': HTMLPskUiFeedbackElement;
    'psk-ui-loader': HTMLPskUiLoaderElement;
    'psk-user-profile': HTMLPskUserProfileElement;
    'psk-user-profile-renderer': HTMLPskUserProfileRendererElement;
    'psk-wizard': HTMLPskWizardElement;
  }
}

declare namespace LocalJSX {
  interface AppContainer extends JSXBase.HTMLAttributes<HTMLAppContainerElement> {}
  interface AppMenu extends JSXBase.HTMLAttributes<HTMLAppMenuElement> {
    'hamburgerMaxWidth'?: number;
    'itemRenderer'?: string;
    'menuItems'?: MenuItem[];
    'onMenuEvent'?: (event: CustomEvent<any>) => void;
    'onNeedMenuItems'?: (event: CustomEvent<any>) => void;
  }
  interface DropdownRenderer extends JSXBase.HTMLAttributes<HTMLDropdownRendererElement> {
    'active'?: boolean;
    'somethingChanged'?: boolean;
    'url'?: any;
  }
  interface PskAppRouter extends JSXBase.HTMLAttributes<HTMLPskAppRouterElement> {
    'menuItems'?: MenuItem[];
    'onNeedMenuItems'?: (event: CustomEvent<any>) => void;
  }
  interface PskAttachmentsList extends JSXBase.HTMLAttributes<HTMLPskAttachmentsListElement> {
    'files'?: WgFile[];
  }
  interface PskButton extends JSXBase.HTMLAttributes<HTMLPskButtonElement> {
    'buttonClass'?: string;
    'disabled'?: boolean;
    'eventData'?: any;
    'eventEmitter'?: EventEmitter;
    'label'?: string;
  }
  interface PskFilesChooser extends JSXBase.HTMLAttributes<HTMLPskFilesChooserElement> {
    'accept'?: string;
    'label'?: string;
    'onFilesChange'?: Function;
    'onFilesSelect'?: Function;
  }
  interface PskListFeedbacks extends JSXBase.HTMLAttributes<HTMLPskListFeedbacksElement> {
    'hour'?: number;
    'messagesToDisplay'?: number;
    'minute'?: number;
    'onOpenFeedback'?: (event: CustomEvent<any>) => void;
    'onShowFeedback'?: (event: CustomEvent<any>) => void;
    'second'?: number;
  }
  interface PskMenuItemRenderer extends JSXBase.HTMLAttributes<HTMLPskMenuItemRendererElement> {
    'active'?: boolean;
    'value'?: MenuItem;
  }
  interface PskModal extends JSXBase.HTMLAttributes<HTMLPskModalElement> {
    'onCloseModal'?: (event: CustomEvent<any>) => void;
    'opened'?: boolean;
  }
  interface PskPageNotFound extends JSXBase.HTMLAttributes<HTMLPskPageNotFoundElement> {
    'basePath'?: string;
    'urlDestination'?: string;
  }
  interface PskPinPopup extends JSXBase.HTMLAttributes<HTMLPskPinPopupElement> {
    'onSendPin'?: (event: CustomEvent<any>) => void;
    'opened'?: boolean;
  }
  interface PskUiFeedback extends JSXBase.HTMLAttributes<HTMLPskUiFeedbackElement> {
    'message'?: any;
    'onCloseFeedback'?: (event: CustomEvent<any>) => void;
    'opened'?: boolean;
    'timeMeasure'?: string;
    'timeSinceCreation'?: number;
    'typeOfAlert'?: string;
  }
  interface PskUiLoader extends JSXBase.HTMLAttributes<HTMLPskUiLoaderElement> {
    'shouldBeRendered'?: boolean;
  }
  interface PskUserProfile extends JSXBase.HTMLAttributes<HTMLPskUserProfileElement> {
    'onGetUserInfo'?: (event: CustomEvent<any>) => void;
    'profileRenderer'?: any;
    'userInfo'?: any;
  }
  interface PskUserProfileRenderer extends JSXBase.HTMLAttributes<HTMLPskUserProfileRendererElement> {
    'userInfo'?: any;
  }
  interface PskWizard extends JSXBase.HTMLAttributes<HTMLPskWizardElement> {
    'onChangeStep'?: (event: CustomEvent<any>) => void;
    'onFinishWizard'?: (event: CustomEvent<any>) => void;
    'onNeedWizardConfiguration'?: (event: CustomEvent<any>) => void;
    'wizardSteps'?: WizardStep[];
  }

  interface IntrinsicElements {
    'app-container': AppContainer;
    'app-menu': AppMenu;
    'dropdown-renderer': DropdownRenderer;
    'psk-app-router': PskAppRouter;
    'psk-attachments-list': PskAttachmentsList;
    'psk-button': PskButton;
    'psk-files-chooser': PskFilesChooser;
    'psk-list-feedbacks': PskListFeedbacks;
    'psk-menu-item-renderer': PskMenuItemRenderer;
    'psk-modal': PskModal;
    'psk-page-not-found': PskPageNotFound;
    'psk-pin-popup': PskPinPopup;
    'psk-ui-feedback': PskUiFeedback;
    'psk-ui-loader': PskUiLoader;
    'psk-user-profile': PskUserProfile;
    'psk-user-profile-renderer': PskUserProfileRenderer;
    'psk-wizard': PskWizard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


