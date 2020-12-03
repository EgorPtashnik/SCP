using notification as db from '../db/notification';
using { ExecuteActionResultType } from '../db/types';

service NotificationService {
  entity Actions as projection on db.Action;
  entity BulkActionResultTypes as projection on db.BulkActionResultType actions {
    action BulkActionByHeader(ParentId: UUID not null, ActionId: String(32) not null) returns BulkActionResultTypes;
  };
  entity Channels as projection on db.Channel;
  entity NavigationTargetParams as projection on db.NavigationTargetParam;
  entity Notifications as projection on db.Notification;
  entity NotificationTypePersonalizationSet as projection on db.NotificationTypePersonalization;

  action Dismiss(NotificationId: UUID not null);
  action DismissAll(ParentId: UUID not null);
  action ExecuteAction(NotificationId: UUID not null, ActionId: String(32) not null) returns ExecuteActionResultType;
  action MarkRead(NotificationId: UUID not null);
  action ResetBadgeNumber();
  action ResetBadgeNumberByIntent(NavigationIntent: String not null);
  function GetBadgeNumber() returns Integer not null;
  function GetBadgeNumberByIntent(NavigationIntent: String not null) returns Integer not null;
}

annotate NotificationService.Notifications with @odata.draft.enabled;

annotate NotificationService.Notifications with @(
  Common : {Label : 'Notifications'},
  UI : {
    SelectionFields: [
      Id,
      ParentId,
      NotificationTypeId
    ],
    HeaderInfo: {
      TypeName : 'Notification',
      TypeNamePlural: 'Notifications',
      Title: { Value: SensitiveText },
      Description: { Value: Text }
    },
    LineItem: [
      {Value: Id},
      {Value: OriginId},
      {Value: CreatedAt},
      {Value: IsActionable},
      {Value: IsRead},
      {Value: IsGroupable},
      {Value: IsGroupHeader},
      {Value: NavigationTargetAction},
      {Value: NavigationTargetObject},
      {Value: NavigationIntent},
      {Value: NotificationTypeId},
      {Value: NotificationTypeKey},
      {Value: ParentId},
      {Value: Priority},
      {Value: SensitiveText},
      {Value: Text},
      {Value: GroupHeaderText},
      {Value: NotificationCount},
      {Value: SubTitle},
      {Value: NotificationTypeDesc}
    ],
  }
);
