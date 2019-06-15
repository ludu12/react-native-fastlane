//
//  ToastManager.m
//  fastlanedemo
//
//  Created by Luke Dunscombe on 6/15/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ToastManager.h"

@implementation ToastManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(toastMessage:(NSString *)message)
{
  [self showToastMessage:message];
}

-(void)showToastMessage:(NSString *)message
{
  UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
  [rootViewController.view makeToast:message];
}


- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

@end
