/* eslint-disable */
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
  ExtendedHistoryType,
} from './interfaces/ExtendedHistoryType';
import {
  LocationSegments,
  RouterHistory,
} from '@stencil/router';
import {
  WgFile,
} from './interfaces/WgFile';
import {
  StyleCustomisation,
} from './interfaces/StyleCustomisation';
import {
  SelectType,
} from './interfaces/FormModel';
import {
  WizardStep,
} from './interfaces/Wizard';

export namespace Components {
  interface AppMenu {
    'hamburgerMaxWidth'?: number;
    'historyType': ExtendedHistoryType;
    'itemRenderer'?: string;
    'menuItems'?: MenuItem[];
  }
  interface DropdownRenderer {
    'active': boolean;
    'somethingChanged': boolean;
    'url': any;
  }
  interface ExpandableRenderer {
    'active': boolean;
    'firstMenuChild': any;
    'history': RouterHistory;
    'somethingChanged': boolean;
    'url': any;
  }
  interface ForEachTemplateItem {}
  interface MobileProfileRenderer {
    'userInfo': any;
  }
  interface PskAppRoot {
    'controller': any;
  }
  interface PskAppRouter {
    'failRedirectTo': string;
    'historyType': ExtendedHistoryType;
    'routesItems'?: MenuItem[];
  }
  interface PskAttachmentsList {
    'files': WgFile[];
    'removeFileFromList'?: Function;
  }
  interface PskButton {
    'buttonClass': string | null;
    'disabled': boolean;
    'eventData': any | null;
    'eventDispatcher': string;
    'eventName': string | null;
    'label': string | null;
  }
  interface PskCard {
    'id': string;
    'title': string;
  }
  interface PskChapter {
    'guid': string;
    'title': string;
  }
  interface PskCheckbox {
    'checkboxLabel'?: string | null;
    'checked'?: boolean;
    'checkedValue'?: string | null;
    'label'?: string | null;
    'name'?: string | null;
    'required'?: boolean;
    'uncheckedValue'?: string | null;
    'value'?: string;
  }
  interface PskCode {
    'language': string;
    'title': string;
  }
  interface PskContainer {
    'controllerName'?: string | null;
    'htmlFilePath'?: string | null;
    'parentHost': HTMLElement;
  }
  interface PskControllerDescriptor {
    'title': string;
  }
  interface PskCopyClipboard {
    'id': string;
  }
  interface PskDefaultRenderer {}
  interface PskDescription {
    'title': string;
  }
  interface PskEventDescriptor {
    'title': string;
  }
  interface PskExample {
    'title': string;
  }
  interface PskFilesChooser {
    'accept'?: string;
    'label': string;
    'onFilesChange'?: Function;
    'onFilesSelect'?: Function;
  }
  interface PskFloatingMenu {
    'opened': boolean;
  }
  interface PskForEach {}
  interface PskForm {
    'controllerName': string | null;
    'formActions': string | null;
  }
  interface PskFormRow {}
  interface PskGrid {
    'columns': number | null;
  }
  interface PskHoc {
    'title': string;
  }
  interface PskIcon {
    'color'?: string;
    'disableColor'?: boolean;
    'icon': string | null;
  }
  interface PskImg {
    'src': string;
    'title': string;
  }
  interface PskInput {
    'invalidValue'?: boolean | null;
    'label'?: string | null;
    'name'?: string | null;
    'placeholder'?: string | null;
    'readOnly'?: boolean;
    'required'?: boolean;
    'type'?: string;
    'value'?: string | null;
  }
  interface PskLabel {
    'for': string | null;
    'label': string | null;
  }
  interface PskLink {
    'page': string;
  }
  interface PskList {
    'listType': string;
  }
  interface PskListFeedbacks {
    'alertRenderer'?: string;
    'messagesToDisplay'?: number;
    'styleCustomisation'?: StyleCustomisation;
    'timeAlive'?: number;
    'toastRenderer'?: string;
  }
  interface PskMenuItemRenderer {
    'active': boolean;
    'historyType': ExtendedHistoryType;
    'value': MenuItem;
  }
  interface PskModal {
    'opened': boolean;
  }
  interface PskPage {
    'title': string;
    'tocTitle': string;
  }
  interface PskPageLoader {
    'pageUrl': string;
  }
  interface PskPageNotFound {
    'basePath'?: string;
    'pageRenderer'?: string;
    'urlDestination'?: string;
  }
  interface PskPageNotFoundRenderer {}
  interface PskPinPopup {
    'opened': boolean;
  }
  interface PskPropertyDescriptor {
    'title': string;
  }
  interface PskRadio {
    'checked'?: boolean;
    'invalidValue'?: boolean | null;
    'label'?: string | null;
    'name'?: string | null;
    'readOnly'?: boolean;
    'value'?: string | null;
  }
  interface PskRadioGroup {
    'invalid'?: boolean;
    'label': string | null;
    'name'?: string | null;
    'required'?: boolean;
    'value'?: string | null;
  }
  interface PskRouteRedirect {
    'history': RouterHistory;
    'url': any;
  }
  interface PskSelect {
    'disabled'?: boolean;
    'invalidValue'?: boolean | null;
    'label': string | null;
    'placeholder'?: string | null;
    'required'?: boolean;
    'selectionType'?: SelectType;
    'value'?: string | null;
  }
  interface PskSlideshow {
    'caption': string;
    'fadeSeconds': number;
    'images': string;
    'title': string;
    'visibleSeconds': number;
  }
  interface PskSsApp {
    'appName': string;
    'iframeSrc': string;
    'swPath': string;
  }
  interface PskStepper {
    'activeStep': WizardStep;
    'componentRender': string;
    'handleStepChange': Function;
    'wizardSteps': WizardStep[];
  }
  interface PskStepperRenderer {
    'activeStep': WizardStep;
    'handleStepChange': Function;
    'wizardSteps': WizardStep[];
  }
  interface PskTable {
    'cellsWidth': string;
    'footer': boolean;
    'header': boolean;
  }
  interface PskToc {
    'title': string;
  }
  interface PskToolbar {
    'actions': string | null;
    'eventData': string | null;
    'icons': boolean;
  }
  interface PskUiAlert {
    'message': any;
    'styleCustomisation': StyleCustomisation;
    'timeAlive': any;
    'typeOfAlert': string;
  }
  interface PskUiLoader {
    'shouldBeRendered': boolean;
  }
  interface PskUiToast {
    'message': any;
    'styleCustomisation': StyleCustomisation;
    'timeMeasure': string;
    'timeSinceCreation': number;
  }
  interface PskUserProfile {
    'profileRenderer': any;
    'userInfo': any;
  }
  interface PskUserProfileRenderer {
    'userInfo': any;
  }
  interface PskWizard {
    'componentRender': string;
    'wizardSteps'?: WizardStep[];
  }
  interface QueryPageLink {
    'activeClass': string;
    'anchorClass'?: string;
    'anchorId'?: string;
    'anchorRole'?: string;
    'anchorTabIndex'?: string;
    'anchorTitle'?: string;
    'ariaHaspopup'?: string;
    'ariaLabel'?: string;
    'ariaPosinset'?: string;
    'ariaSetsize'?: number;
    /**
    * Custom tag to use instead of an anchor
    */
    'custom': string;
    'exact': boolean;
    'history'?: RouterHistory;
    'location'?: LocationSegments;
    'strict': boolean;
    'url'?: string;
    'urlMatch'?: string;
  }
  interface QueryPagesRouter {
    'history': RouterHistory;
    'location': LocationSegments;
    'pages': MenuItem[];
    'redirectTo': string;
  }
  interface SidebarRenderer {
    'active': boolean;
    'historyType': ExtendedHistoryType;
    'value': MenuItem;
  }
}

declare global {


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

  interface HTMLExpandableRendererElement extends Components.ExpandableRenderer, HTMLStencilElement {}
  var HTMLExpandableRendererElement: {
    prototype: HTMLExpandableRendererElement;
    new (): HTMLExpandableRendererElement;
  };

  interface HTMLForEachTemplateItemElement extends Components.ForEachTemplateItem, HTMLStencilElement {}
  var HTMLForEachTemplateItemElement: {
    prototype: HTMLForEachTemplateItemElement;
    new (): HTMLForEachTemplateItemElement;
  };

  interface HTMLMobileProfileRendererElement extends Components.MobileProfileRenderer, HTMLStencilElement {}
  var HTMLMobileProfileRendererElement: {
    prototype: HTMLMobileProfileRendererElement;
    new (): HTMLMobileProfileRendererElement;
  };

  interface HTMLPskAppRootElement extends Components.PskAppRoot, HTMLStencilElement {}
  var HTMLPskAppRootElement: {
    prototype: HTMLPskAppRootElement;
    new (): HTMLPskAppRootElement;
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

  interface HTMLPskCardElement extends Components.PskCard, HTMLStencilElement {}
  var HTMLPskCardElement: {
    prototype: HTMLPskCardElement;
    new (): HTMLPskCardElement;
  };

  interface HTMLPskChapterElement extends Components.PskChapter, HTMLStencilElement {}
  var HTMLPskChapterElement: {
    prototype: HTMLPskChapterElement;
    new (): HTMLPskChapterElement;
  };

  interface HTMLPskCheckboxElement extends Components.PskCheckbox, HTMLStencilElement {}
  var HTMLPskCheckboxElement: {
    prototype: HTMLPskCheckboxElement;
    new (): HTMLPskCheckboxElement;
  };

  interface HTMLPskCodeElement extends Components.PskCode, HTMLStencilElement {}
  var HTMLPskCodeElement: {
    prototype: HTMLPskCodeElement;
    new (): HTMLPskCodeElement;
  };

  interface HTMLPskContainerElement extends Components.PskContainer, HTMLStencilElement {}
  var HTMLPskContainerElement: {
    prototype: HTMLPskContainerElement;
    new (): HTMLPskContainerElement;
  };

  interface HTMLPskControllerDescriptorElement extends Components.PskControllerDescriptor, HTMLStencilElement {}
  var HTMLPskControllerDescriptorElement: {
    prototype: HTMLPskControllerDescriptorElement;
    new (): HTMLPskControllerDescriptorElement;
  };

  interface HTMLPskCopyClipboardElement extends Components.PskCopyClipboard, HTMLStencilElement {}
  var HTMLPskCopyClipboardElement: {
    prototype: HTMLPskCopyClipboardElement;
    new (): HTMLPskCopyClipboardElement;
  };

  interface HTMLPskDefaultRendererElement extends Components.PskDefaultRenderer, HTMLStencilElement {}
  var HTMLPskDefaultRendererElement: {
    prototype: HTMLPskDefaultRendererElement;
    new (): HTMLPskDefaultRendererElement;
  };

  interface HTMLPskDescriptionElement extends Components.PskDescription, HTMLStencilElement {}
  var HTMLPskDescriptionElement: {
    prototype: HTMLPskDescriptionElement;
    new (): HTMLPskDescriptionElement;
  };

  interface HTMLPskEventDescriptorElement extends Components.PskEventDescriptor, HTMLStencilElement {}
  var HTMLPskEventDescriptorElement: {
    prototype: HTMLPskEventDescriptorElement;
    new (): HTMLPskEventDescriptorElement;
  };

  interface HTMLPskExampleElement extends Components.PskExample, HTMLStencilElement {}
  var HTMLPskExampleElement: {
    prototype: HTMLPskExampleElement;
    new (): HTMLPskExampleElement;
  };

  interface HTMLPskFilesChooserElement extends Components.PskFilesChooser, HTMLStencilElement {}
  var HTMLPskFilesChooserElement: {
    prototype: HTMLPskFilesChooserElement;
    new (): HTMLPskFilesChooserElement;
  };

  interface HTMLPskFloatingMenuElement extends Components.PskFloatingMenu, HTMLStencilElement {}
  var HTMLPskFloatingMenuElement: {
    prototype: HTMLPskFloatingMenuElement;
    new (): HTMLPskFloatingMenuElement;
  };

  interface HTMLPskForEachElement extends Components.PskForEach, HTMLStencilElement {}
  var HTMLPskForEachElement: {
    prototype: HTMLPskForEachElement;
    new (): HTMLPskForEachElement;
  };

  interface HTMLPskFormElement extends Components.PskForm, HTMLStencilElement {}
  var HTMLPskFormElement: {
    prototype: HTMLPskFormElement;
    new (): HTMLPskFormElement;
  };

  interface HTMLPskFormRowElement extends Components.PskFormRow, HTMLStencilElement {}
  var HTMLPskFormRowElement: {
    prototype: HTMLPskFormRowElement;
    new (): HTMLPskFormRowElement;
  };

  interface HTMLPskGridElement extends Components.PskGrid, HTMLStencilElement {}
  var HTMLPskGridElement: {
    prototype: HTMLPskGridElement;
    new (): HTMLPskGridElement;
  };

  interface HTMLPskHocElement extends Components.PskHoc, HTMLStencilElement {}
  var HTMLPskHocElement: {
    prototype: HTMLPskHocElement;
    new (): HTMLPskHocElement;
  };

  interface HTMLPskIconElement extends Components.PskIcon, HTMLStencilElement {}
  var HTMLPskIconElement: {
    prototype: HTMLPskIconElement;
    new (): HTMLPskIconElement;
  };

  interface HTMLPskImgElement extends Components.PskImg, HTMLStencilElement {}
  var HTMLPskImgElement: {
    prototype: HTMLPskImgElement;
    new (): HTMLPskImgElement;
  };

  interface HTMLPskInputElement extends Components.PskInput, HTMLStencilElement {}
  var HTMLPskInputElement: {
    prototype: HTMLPskInputElement;
    new (): HTMLPskInputElement;
  };

  interface HTMLPskLabelElement extends Components.PskLabel, HTMLStencilElement {}
  var HTMLPskLabelElement: {
    prototype: HTMLPskLabelElement;
    new (): HTMLPskLabelElement;
  };

  interface HTMLPskLinkElement extends Components.PskLink, HTMLStencilElement {}
  var HTMLPskLinkElement: {
    prototype: HTMLPskLinkElement;
    new (): HTMLPskLinkElement;
  };

  interface HTMLPskListElement extends Components.PskList, HTMLStencilElement {}
  var HTMLPskListElement: {
    prototype: HTMLPskListElement;
    new (): HTMLPskListElement;
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

  interface HTMLPskPageElement extends Components.PskPage, HTMLStencilElement {}
  var HTMLPskPageElement: {
    prototype: HTMLPskPageElement;
    new (): HTMLPskPageElement;
  };

  interface HTMLPskPageLoaderElement extends Components.PskPageLoader, HTMLStencilElement {}
  var HTMLPskPageLoaderElement: {
    prototype: HTMLPskPageLoaderElement;
    new (): HTMLPskPageLoaderElement;
  };

  interface HTMLPskPageNotFoundElement extends Components.PskPageNotFound, HTMLStencilElement {}
  var HTMLPskPageNotFoundElement: {
    prototype: HTMLPskPageNotFoundElement;
    new (): HTMLPskPageNotFoundElement;
  };

  interface HTMLPskPageNotFoundRendererElement extends Components.PskPageNotFoundRenderer, HTMLStencilElement {}
  var HTMLPskPageNotFoundRendererElement: {
    prototype: HTMLPskPageNotFoundRendererElement;
    new (): HTMLPskPageNotFoundRendererElement;
  };

  interface HTMLPskPinPopupElement extends Components.PskPinPopup, HTMLStencilElement {}
  var HTMLPskPinPopupElement: {
    prototype: HTMLPskPinPopupElement;
    new (): HTMLPskPinPopupElement;
  };

  interface HTMLPskPropertyDescriptorElement extends Components.PskPropertyDescriptor, HTMLStencilElement {}
  var HTMLPskPropertyDescriptorElement: {
    prototype: HTMLPskPropertyDescriptorElement;
    new (): HTMLPskPropertyDescriptorElement;
  };

  interface HTMLPskRadioElement extends Components.PskRadio, HTMLStencilElement {}
  var HTMLPskRadioElement: {
    prototype: HTMLPskRadioElement;
    new (): HTMLPskRadioElement;
  };

  interface HTMLPskRadioGroupElement extends Components.PskRadioGroup, HTMLStencilElement {}
  var HTMLPskRadioGroupElement: {
    prototype: HTMLPskRadioGroupElement;
    new (): HTMLPskRadioGroupElement;
  };

  interface HTMLPskRouteRedirectElement extends Components.PskRouteRedirect, HTMLStencilElement {}
  var HTMLPskRouteRedirectElement: {
    prototype: HTMLPskRouteRedirectElement;
    new (): HTMLPskRouteRedirectElement;
  };

  interface HTMLPskSelectElement extends Components.PskSelect, HTMLStencilElement {}
  var HTMLPskSelectElement: {
    prototype: HTMLPskSelectElement;
    new (): HTMLPskSelectElement;
  };

  interface HTMLPskSlideshowElement extends Components.PskSlideshow, HTMLStencilElement {}
  var HTMLPskSlideshowElement: {
    prototype: HTMLPskSlideshowElement;
    new (): HTMLPskSlideshowElement;
  };

  interface HTMLPskSsAppElement extends Components.PskSsApp, HTMLStencilElement {}
  var HTMLPskSsAppElement: {
    prototype: HTMLPskSsAppElement;
    new (): HTMLPskSsAppElement;
  };

  interface HTMLPskStepperElement extends Components.PskStepper, HTMLStencilElement {}
  var HTMLPskStepperElement: {
    prototype: HTMLPskStepperElement;
    new (): HTMLPskStepperElement;
  };

  interface HTMLPskStepperRendererElement extends Components.PskStepperRenderer, HTMLStencilElement {}
  var HTMLPskStepperRendererElement: {
    prototype: HTMLPskStepperRendererElement;
    new (): HTMLPskStepperRendererElement;
  };

  interface HTMLPskTableElement extends Components.PskTable, HTMLStencilElement {}
  var HTMLPskTableElement: {
    prototype: HTMLPskTableElement;
    new (): HTMLPskTableElement;
  };

  interface HTMLPskTocElement extends Components.PskToc, HTMLStencilElement {}
  var HTMLPskTocElement: {
    prototype: HTMLPskTocElement;
    new (): HTMLPskTocElement;
  };

  interface HTMLPskToolbarElement extends Components.PskToolbar, HTMLStencilElement {}
  var HTMLPskToolbarElement: {
    prototype: HTMLPskToolbarElement;
    new (): HTMLPskToolbarElement;
  };

  interface HTMLPskUiAlertElement extends Components.PskUiAlert, HTMLStencilElement {}
  var HTMLPskUiAlertElement: {
    prototype: HTMLPskUiAlertElement;
    new (): HTMLPskUiAlertElement;
  };

  interface HTMLPskUiLoaderElement extends Components.PskUiLoader, HTMLStencilElement {}
  var HTMLPskUiLoaderElement: {
    prototype: HTMLPskUiLoaderElement;
    new (): HTMLPskUiLoaderElement;
  };

  interface HTMLPskUiToastElement extends Components.PskUiToast, HTMLStencilElement {}
  var HTMLPskUiToastElement: {
    prototype: HTMLPskUiToastElement;
    new (): HTMLPskUiToastElement;
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

  interface HTMLQueryPageLinkElement extends Components.QueryPageLink, HTMLStencilElement {}
  var HTMLQueryPageLinkElement: {
    prototype: HTMLQueryPageLinkElement;
    new (): HTMLQueryPageLinkElement;
  };

  interface HTMLQueryPagesRouterElement extends Components.QueryPagesRouter, HTMLStencilElement {}
  var HTMLQueryPagesRouterElement: {
    prototype: HTMLQueryPagesRouterElement;
    new (): HTMLQueryPagesRouterElement;
  };

  interface HTMLSidebarRendererElement extends Components.SidebarRenderer, HTMLStencilElement {}
  var HTMLSidebarRendererElement: {
    prototype: HTMLSidebarRendererElement;
    new (): HTMLSidebarRendererElement;
  };
  interface HTMLElementTagNameMap {
    'app-menu': HTMLAppMenuElement;
    'dropdown-renderer': HTMLDropdownRendererElement;
    'expandable-renderer': HTMLExpandableRendererElement;
    'for-each-template-item': HTMLForEachTemplateItemElement;
    'mobile-profile-renderer': HTMLMobileProfileRendererElement;
    'psk-app-root': HTMLPskAppRootElement;
    'psk-app-router': HTMLPskAppRouterElement;
    'psk-attachments-list': HTMLPskAttachmentsListElement;
    'psk-button': HTMLPskButtonElement;
    'psk-card': HTMLPskCardElement;
    'psk-chapter': HTMLPskChapterElement;
    'psk-checkbox': HTMLPskCheckboxElement;
    'psk-code': HTMLPskCodeElement;
    'psk-container': HTMLPskContainerElement;
    'psk-controller-descriptor': HTMLPskControllerDescriptorElement;
    'psk-copy-clipboard': HTMLPskCopyClipboardElement;
    'psk-default-renderer': HTMLPskDefaultRendererElement;
    'psk-description': HTMLPskDescriptionElement;
    'psk-event-descriptor': HTMLPskEventDescriptorElement;
    'psk-example': HTMLPskExampleElement;
    'psk-files-chooser': HTMLPskFilesChooserElement;
    'psk-floating-menu': HTMLPskFloatingMenuElement;
    'psk-for-each': HTMLPskForEachElement;
    'psk-form': HTMLPskFormElement;
    'psk-form-row': HTMLPskFormRowElement;
    'psk-grid': HTMLPskGridElement;
    'psk-hoc': HTMLPskHocElement;
    'psk-icon': HTMLPskIconElement;
    'psk-img': HTMLPskImgElement;
    'psk-input': HTMLPskInputElement;
    'psk-label': HTMLPskLabelElement;
    'psk-link': HTMLPskLinkElement;
    'psk-list': HTMLPskListElement;
    'psk-list-feedbacks': HTMLPskListFeedbacksElement;
    'psk-menu-item-renderer': HTMLPskMenuItemRendererElement;
    'psk-modal': HTMLPskModalElement;
    'psk-page': HTMLPskPageElement;
    'psk-page-loader': HTMLPskPageLoaderElement;
    'psk-page-not-found': HTMLPskPageNotFoundElement;
    'psk-page-not-found-renderer': HTMLPskPageNotFoundRendererElement;
    'psk-pin-popup': HTMLPskPinPopupElement;
    'psk-property-descriptor': HTMLPskPropertyDescriptorElement;
    'psk-radio': HTMLPskRadioElement;
    'psk-radio-group': HTMLPskRadioGroupElement;
    'psk-route-redirect': HTMLPskRouteRedirectElement;
    'psk-select': HTMLPskSelectElement;
    'psk-slideshow': HTMLPskSlideshowElement;
    'psk-ss-app': HTMLPskSsAppElement;
    'psk-stepper': HTMLPskStepperElement;
    'psk-stepper-renderer': HTMLPskStepperRendererElement;
    'psk-table': HTMLPskTableElement;
    'psk-toc': HTMLPskTocElement;
    'psk-toolbar': HTMLPskToolbarElement;
    'psk-ui-alert': HTMLPskUiAlertElement;
    'psk-ui-loader': HTMLPskUiLoaderElement;
    'psk-ui-toast': HTMLPskUiToastElement;
    'psk-user-profile': HTMLPskUserProfileElement;
    'psk-user-profile-renderer': HTMLPskUserProfileRendererElement;
    'psk-wizard': HTMLPskWizardElement;
    'query-page-link': HTMLQueryPageLinkElement;
    'query-pages-router': HTMLQueryPagesRouterElement;
    'sidebar-renderer': HTMLSidebarRendererElement;
  }
}

declare namespace LocalJSX {
  interface AppMenu {
    'hamburgerMaxWidth'?: number;
    'historyType'?: ExtendedHistoryType;
    'itemRenderer'?: string;
    'menuItems'?: MenuItem[];
    'onGetHistoryType'?: (event: CustomEvent<any>) => void;
    'onMenuEvent'?: (event: CustomEvent<any>) => void;
    'onNeedMenuItems'?: (event: CustomEvent<any>) => void;
  }
  interface DropdownRenderer {
    'active'?: boolean;
    'somethingChanged'?: boolean;
    'url'?: any;
  }
  interface ExpandableRenderer {
    'active'?: boolean;
    'firstMenuChild'?: any;
    'history'?: RouterHistory;
    'somethingChanged'?: boolean;
    'url'?: any;
  }
  interface ForEachTemplateItem {}
  interface MobileProfileRenderer {
    'userInfo'?: any;
  }
  interface PskAppRoot {
    'controller'?: any;
    'onControllerFactoryIsReady'?: (event: CustomEvent<any>) => void;
    'onRouteChanged'?: (event: CustomEvent<any>) => void;
  }
  interface PskAppRouter {
    'failRedirectTo'?: string;
    'historyType'?: ExtendedHistoryType;
    'onGetHistoryType'?: (event: CustomEvent<any>) => void;
    'onNeedRoutes'?: (event: CustomEvent<any>) => void;
    'routesItems'?: MenuItem[];
  }
  interface PskAttachmentsList {
    'files'?: WgFile[];
    'removeFileFromList'?: Function;
  }
  interface PskButton {
    'buttonClass'?: string | null;
    'disabled'?: boolean;
    'eventData'?: any | null;
    'eventDispatcher'?: string;
    'eventName'?: string | null;
    'label'?: string | null;
  }
  interface PskCard {
    'id'?: string;
    'title'?: string;
  }
  interface PskChapter {
    'guid'?: string;
    'onPsk-send-chapter'?: (event: CustomEvent<any>) => void;
    'title'?: string;
  }
  interface PskCheckbox {
    'checkboxLabel'?: string | null;
    'checked'?: boolean;
    'checkedValue'?: string | null;
    'label'?: string | null;
    'name'?: string | null;
    'required'?: boolean;
    'uncheckedValue'?: string | null;
    'value'?: string;
  }
  interface PskCode {
    'language'?: string;
    'title'?: string;
  }
  interface PskContainer {
    'controllerName'?: string | null;
    'htmlFilePath'?: string | null;
    'parentHost'?: HTMLElement;
  }
  interface PskControllerDescriptor {
    'title'?: string;
  }
  interface PskCopyClipboard {
    'id'?: string;
    'onGetHistoryType'?: (event: CustomEvent<any>) => void;
  }
  interface PskDefaultRenderer {}
  interface PskDescription {
    'title'?: string;
  }
  interface PskEventDescriptor {
    'title'?: string;
  }
  interface PskExample {
    'title'?: string;
  }
  interface PskFilesChooser {
    'accept'?: string;
    'label'?: string;
    'onFilesChange'?: Function;
    'onFilesSelect'?: Function;
  }
  interface PskFloatingMenu {
    'onNeedFloatingMenu'?: (event: CustomEvent<any>) => void;
    'opened'?: boolean;
  }
  interface PskForEach {}
  interface PskForm {
    'controllerName'?: string | null;
    'formActions'?: string | null;
  }
  interface PskFormRow {}
  interface PskGrid {
    'columns'?: number | null;
  }
  interface PskHoc {
    'title'?: string;
  }
  interface PskIcon {
    'color'?: string;
    'disableColor'?: boolean;
    'icon'?: string | null;
  }
  interface PskImg {
    'src'?: string;
    'title'?: string;
  }
  interface PskInput {
    'invalidValue'?: boolean | null;
    'label'?: string | null;
    'name'?: string | null;
    'placeholder'?: string | null;
    'readOnly'?: boolean;
    'required'?: boolean;
    'type'?: string;
    'value'?: string | null;
  }
  interface PskLabel {
    'for'?: string | null;
    'label'?: string | null;
  }
  interface PskLink {
    'onValidateUrl'?: (event: CustomEvent<any>) => void;
    'page'?: string;
  }
  interface PskList {
    'listType'?: string;
  }
  interface PskListFeedbacks {
    'alertRenderer'?: string;
    'messagesToDisplay'?: number;
    'onOpenFeedback'?: (event: CustomEvent<any>) => void;
    'styleCustomisation'?: StyleCustomisation;
    'timeAlive'?: number;
    'toastRenderer'?: string;
  }
  interface PskMenuItemRenderer {
    'active'?: boolean;
    'historyType'?: ExtendedHistoryType;
    'onMenuClicked'?: (event: CustomEvent<any>) => void;
    'value'?: MenuItem;
  }
  interface PskModal {
    'onCloseModal'?: (event: CustomEvent<any>) => void;
    'opened'?: boolean;
  }
  interface PskPage {
    'title'?: string;
    'tocTitle'?: string;
  }
  interface PskPageLoader {
    'pageUrl'?: string;
  }
  interface PskPageNotFound {
    'basePath'?: string;
    'pageRenderer'?: string;
    'urlDestination'?: string;
  }
  interface PskPageNotFoundRenderer {}
  interface PskPinPopup {
    'onSendPin'?: (event: CustomEvent<any>) => void;
    'opened'?: boolean;
  }
  interface PskPropertyDescriptor {
    'title'?: string;
  }
  interface PskRadio {
    'checked'?: boolean;
    'invalidValue'?: boolean | null;
    'label'?: string | null;
    'name'?: string | null;
    'onOnChangeRadio'?: (event: CustomEvent<any>) => void;
    'readOnly'?: boolean;
    'value'?: string | null;
  }
  interface PskRadioGroup {
    'invalid'?: boolean;
    'label'?: string | null;
    'name'?: string | null;
    'required'?: boolean;
    'value'?: string | null;
  }
  interface PskRouteRedirect {
    'history'?: RouterHistory;
    'url'?: any;
  }
  interface PskSelect {
    'disabled'?: boolean;
    'invalidValue'?: boolean | null;
    'label'?: string | null;
    'placeholder'?: string | null;
    'required'?: boolean;
    'selectionType'?: SelectType;
    'value'?: string | null;
  }
  interface PskSlideshow {
    'caption'?: string;
    'fadeSeconds'?: number;
    'images'?: string;
    'title'?: string;
    'visibleSeconds'?: number;
  }
  interface PskSsApp {
    'appName'?: string;
    'iframeSrc'?: string;
    'swPath'?: string;
  }
  interface PskStepper {
    'activeStep'?: WizardStep;
    'componentRender'?: string;
    'handleStepChange'?: Function;
    'wizardSteps'?: WizardStep[];
  }
  interface PskStepperRenderer {
    'activeStep'?: WizardStep;
    'handleStepChange'?: Function;
    'wizardSteps'?: WizardStep[];
  }
  interface PskTable {
    'cellsWidth'?: string;
    'footer'?: boolean;
    'header'?: boolean;
  }
  interface PskToc {
    'title'?: string;
  }
  interface PskToolbar {
    'actions'?: string | null;
    'eventData'?: string | null;
    'icons'?: boolean;
  }
  interface PskUiAlert {
    'message'?: any;
    'onCloseFeedback'?: (event: CustomEvent<any>) => void;
    'styleCustomisation'?: StyleCustomisation;
    'timeAlive'?: any;
    'typeOfAlert'?: string;
  }
  interface PskUiLoader {
    'shouldBeRendered'?: boolean;
  }
  interface PskUiToast {
    'message'?: any;
    'onCloseFeedback'?: (event: CustomEvent<any>) => void;
    'styleCustomisation'?: StyleCustomisation;
    'timeMeasure'?: string;
    'timeSinceCreation'?: number;
  }
  interface PskUserProfile {
    'onGetUserInfo'?: (event: CustomEvent<any>) => void;
    'profileRenderer'?: any;
    'userInfo'?: any;
  }
  interface PskUserProfileRenderer {
    'userInfo'?: any;
  }
  interface PskWizard {
    'componentRender'?: string;
    'onChangeStep'?: (event: CustomEvent<any>) => void;
    'onFinishWizard'?: (event: CustomEvent<any>) => void;
    'onNeedWizardConfiguration'?: (event: CustomEvent<any>) => void;
    'wizardSteps'?: WizardStep[];
  }
  interface QueryPageLink {
    'activeClass'?: string;
    'anchorClass'?: string;
    'anchorId'?: string;
    'anchorRole'?: string;
    'anchorTabIndex'?: string;
    'anchorTitle'?: string;
    'ariaHaspopup'?: string;
    'ariaLabel'?: string;
    'ariaPosinset'?: string;
    'ariaSetsize'?: number;
    /**
    * Custom tag to use instead of an anchor
    */
    'custom'?: string;
    'exact'?: boolean;
    'history'?: RouterHistory;
    'location'?: LocationSegments;
    'strict'?: boolean;
    'url'?: string;
    'urlMatch'?: string;
  }
  interface QueryPagesRouter {
    'history'?: RouterHistory;
    'location'?: LocationSegments;
    'pages'?: MenuItem[];
    'redirectTo'?: string;
  }
  interface SidebarRenderer {
    'active'?: boolean;
    'historyType'?: ExtendedHistoryType;
    'value'?: MenuItem;
  }

  interface IntrinsicElements {
    'app-menu': AppMenu;
    'dropdown-renderer': DropdownRenderer;
    'expandable-renderer': ExpandableRenderer;
    'for-each-template-item': ForEachTemplateItem;
    'mobile-profile-renderer': MobileProfileRenderer;
    'psk-app-root': PskAppRoot;
    'psk-app-router': PskAppRouter;
    'psk-attachments-list': PskAttachmentsList;
    'psk-button': PskButton;
    'psk-card': PskCard;
    'psk-chapter': PskChapter;
    'psk-checkbox': PskCheckbox;
    'psk-code': PskCode;
    'psk-container': PskContainer;
    'psk-controller-descriptor': PskControllerDescriptor;
    'psk-copy-clipboard': PskCopyClipboard;
    'psk-default-renderer': PskDefaultRenderer;
    'psk-description': PskDescription;
    'psk-event-descriptor': PskEventDescriptor;
    'psk-example': PskExample;
    'psk-files-chooser': PskFilesChooser;
    'psk-floating-menu': PskFloatingMenu;
    'psk-for-each': PskForEach;
    'psk-form': PskForm;
    'psk-form-row': PskFormRow;
    'psk-grid': PskGrid;
    'psk-hoc': PskHoc;
    'psk-icon': PskIcon;
    'psk-img': PskImg;
    'psk-input': PskInput;
    'psk-label': PskLabel;
    'psk-link': PskLink;
    'psk-list': PskList;
    'psk-list-feedbacks': PskListFeedbacks;
    'psk-menu-item-renderer': PskMenuItemRenderer;
    'psk-modal': PskModal;
    'psk-page': PskPage;
    'psk-page-loader': PskPageLoader;
    'psk-page-not-found': PskPageNotFound;
    'psk-page-not-found-renderer': PskPageNotFoundRenderer;
    'psk-pin-popup': PskPinPopup;
    'psk-property-descriptor': PskPropertyDescriptor;
    'psk-radio': PskRadio;
    'psk-radio-group': PskRadioGroup;
    'psk-route-redirect': PskRouteRedirect;
    'psk-select': PskSelect;
    'psk-slideshow': PskSlideshow;
    'psk-ss-app': PskSsApp;
    'psk-stepper': PskStepper;
    'psk-stepper-renderer': PskStepperRenderer;
    'psk-table': PskTable;
    'psk-toc': PskToc;
    'psk-toolbar': PskToolbar;
    'psk-ui-alert': PskUiAlert;
    'psk-ui-loader': PskUiLoader;
    'psk-ui-toast': PskUiToast;
    'psk-user-profile': PskUserProfile;
    'psk-user-profile-renderer': PskUserProfileRenderer;
    'psk-wizard': PskWizard;
    'query-page-link': QueryPageLink;
    'query-pages-router': QueryPagesRouter;
    'sidebar-renderer': SidebarRenderer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-menu': LocalJSX.AppMenu & JSXBase.HTMLAttributes<HTMLAppMenuElement>;
      'dropdown-renderer': LocalJSX.DropdownRenderer & JSXBase.HTMLAttributes<HTMLDropdownRendererElement>;
      'expandable-renderer': LocalJSX.ExpandableRenderer & JSXBase.HTMLAttributes<HTMLExpandableRendererElement>;
      'for-each-template-item': LocalJSX.ForEachTemplateItem & JSXBase.HTMLAttributes<HTMLForEachTemplateItemElement>;
      'mobile-profile-renderer': LocalJSX.MobileProfileRenderer & JSXBase.HTMLAttributes<HTMLMobileProfileRendererElement>;
      'psk-app-root': LocalJSX.PskAppRoot & JSXBase.HTMLAttributes<HTMLPskAppRootElement>;
      'psk-app-router': LocalJSX.PskAppRouter & JSXBase.HTMLAttributes<HTMLPskAppRouterElement>;
      'psk-attachments-list': LocalJSX.PskAttachmentsList & JSXBase.HTMLAttributes<HTMLPskAttachmentsListElement>;
      'psk-button': LocalJSX.PskButton & JSXBase.HTMLAttributes<HTMLPskButtonElement>;
      'psk-card': LocalJSX.PskCard & JSXBase.HTMLAttributes<HTMLPskCardElement>;
      'psk-chapter': LocalJSX.PskChapter & JSXBase.HTMLAttributes<HTMLPskChapterElement>;
      'psk-checkbox': LocalJSX.PskCheckbox & JSXBase.HTMLAttributes<HTMLPskCheckboxElement>;
      'psk-code': LocalJSX.PskCode & JSXBase.HTMLAttributes<HTMLPskCodeElement>;
      'psk-container': LocalJSX.PskContainer & JSXBase.HTMLAttributes<HTMLPskContainerElement>;
      'psk-controller-descriptor': LocalJSX.PskControllerDescriptor & JSXBase.HTMLAttributes<HTMLPskControllerDescriptorElement>;
      'psk-copy-clipboard': LocalJSX.PskCopyClipboard & JSXBase.HTMLAttributes<HTMLPskCopyClipboardElement>;
      'psk-default-renderer': LocalJSX.PskDefaultRenderer & JSXBase.HTMLAttributes<HTMLPskDefaultRendererElement>;
      'psk-description': LocalJSX.PskDescription & JSXBase.HTMLAttributes<HTMLPskDescriptionElement>;
      'psk-event-descriptor': LocalJSX.PskEventDescriptor & JSXBase.HTMLAttributes<HTMLPskEventDescriptorElement>;
      'psk-example': LocalJSX.PskExample & JSXBase.HTMLAttributes<HTMLPskExampleElement>;
      'psk-files-chooser': LocalJSX.PskFilesChooser & JSXBase.HTMLAttributes<HTMLPskFilesChooserElement>;
      'psk-floating-menu': LocalJSX.PskFloatingMenu & JSXBase.HTMLAttributes<HTMLPskFloatingMenuElement>;
      'psk-for-each': LocalJSX.PskForEach & JSXBase.HTMLAttributes<HTMLPskForEachElement>;
      'psk-form': LocalJSX.PskForm & JSXBase.HTMLAttributes<HTMLPskFormElement>;
      'psk-form-row': LocalJSX.PskFormRow & JSXBase.HTMLAttributes<HTMLPskFormRowElement>;
      'psk-grid': LocalJSX.PskGrid & JSXBase.HTMLAttributes<HTMLPskGridElement>;
      'psk-hoc': LocalJSX.PskHoc & JSXBase.HTMLAttributes<HTMLPskHocElement>;
      'psk-icon': LocalJSX.PskIcon & JSXBase.HTMLAttributes<HTMLPskIconElement>;
      'psk-img': LocalJSX.PskImg & JSXBase.HTMLAttributes<HTMLPskImgElement>;
      'psk-input': LocalJSX.PskInput & JSXBase.HTMLAttributes<HTMLPskInputElement>;
      'psk-label': LocalJSX.PskLabel & JSXBase.HTMLAttributes<HTMLPskLabelElement>;
      'psk-link': LocalJSX.PskLink & JSXBase.HTMLAttributes<HTMLPskLinkElement>;
      'psk-list': LocalJSX.PskList & JSXBase.HTMLAttributes<HTMLPskListElement>;
      'psk-list-feedbacks': LocalJSX.PskListFeedbacks & JSXBase.HTMLAttributes<HTMLPskListFeedbacksElement>;
      'psk-menu-item-renderer': LocalJSX.PskMenuItemRenderer & JSXBase.HTMLAttributes<HTMLPskMenuItemRendererElement>;
      'psk-modal': LocalJSX.PskModal & JSXBase.HTMLAttributes<HTMLPskModalElement>;
      'psk-page': LocalJSX.PskPage & JSXBase.HTMLAttributes<HTMLPskPageElement>;
      'psk-page-loader': LocalJSX.PskPageLoader & JSXBase.HTMLAttributes<HTMLPskPageLoaderElement>;
      'psk-page-not-found': LocalJSX.PskPageNotFound & JSXBase.HTMLAttributes<HTMLPskPageNotFoundElement>;
      'psk-page-not-found-renderer': LocalJSX.PskPageNotFoundRenderer & JSXBase.HTMLAttributes<HTMLPskPageNotFoundRendererElement>;
      'psk-pin-popup': LocalJSX.PskPinPopup & JSXBase.HTMLAttributes<HTMLPskPinPopupElement>;
      'psk-property-descriptor': LocalJSX.PskPropertyDescriptor & JSXBase.HTMLAttributes<HTMLPskPropertyDescriptorElement>;
      'psk-radio': LocalJSX.PskRadio & JSXBase.HTMLAttributes<HTMLPskRadioElement>;
      'psk-radio-group': LocalJSX.PskRadioGroup & JSXBase.HTMLAttributes<HTMLPskRadioGroupElement>;
      'psk-route-redirect': LocalJSX.PskRouteRedirect & JSXBase.HTMLAttributes<HTMLPskRouteRedirectElement>;
      'psk-select': LocalJSX.PskSelect & JSXBase.HTMLAttributes<HTMLPskSelectElement>;
      'psk-slideshow': LocalJSX.PskSlideshow & JSXBase.HTMLAttributes<HTMLPskSlideshowElement>;
      'psk-ss-app': LocalJSX.PskSsApp & JSXBase.HTMLAttributes<HTMLPskSsAppElement>;
      'psk-stepper': LocalJSX.PskStepper & JSXBase.HTMLAttributes<HTMLPskStepperElement>;
      'psk-stepper-renderer': LocalJSX.PskStepperRenderer & JSXBase.HTMLAttributes<HTMLPskStepperRendererElement>;
      'psk-table': LocalJSX.PskTable & JSXBase.HTMLAttributes<HTMLPskTableElement>;
      'psk-toc': LocalJSX.PskToc & JSXBase.HTMLAttributes<HTMLPskTocElement>;
      'psk-toolbar': LocalJSX.PskToolbar & JSXBase.HTMLAttributes<HTMLPskToolbarElement>;
      'psk-ui-alert': LocalJSX.PskUiAlert & JSXBase.HTMLAttributes<HTMLPskUiAlertElement>;
      'psk-ui-loader': LocalJSX.PskUiLoader & JSXBase.HTMLAttributes<HTMLPskUiLoaderElement>;
      'psk-ui-toast': LocalJSX.PskUiToast & JSXBase.HTMLAttributes<HTMLPskUiToastElement>;
      'psk-user-profile': LocalJSX.PskUserProfile & JSXBase.HTMLAttributes<HTMLPskUserProfileElement>;
      'psk-user-profile-renderer': LocalJSX.PskUserProfileRenderer & JSXBase.HTMLAttributes<HTMLPskUserProfileRendererElement>;
      'psk-wizard': LocalJSX.PskWizard & JSXBase.HTMLAttributes<HTMLPskWizardElement>;
      'query-page-link': LocalJSX.QueryPageLink & JSXBase.HTMLAttributes<HTMLQueryPageLinkElement>;
      'query-pages-router': LocalJSX.QueryPagesRouter & JSXBase.HTMLAttributes<HTMLQueryPagesRouterElement>;
      'sidebar-renderer': LocalJSX.SidebarRenderer & JSXBase.HTMLAttributes<HTMLSidebarRendererElement>;
    }
  }
}

