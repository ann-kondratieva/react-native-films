package com.reactfilms;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.imagepicker.ImagePickerPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new RNSpinkitPackage(),
            new PhotoViewPackage(),
            new ReactMaterialKitPackage(),
            new LinearGradientPackage(),
            new ImagePickerPackage(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new RNSpinkitPackage(),
            new PhotoViewPackage(),
            new ReactMaterialKitPackage(),
            new LinearGradientPackage(),
            new ImagePickerPackage(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new RNSpinkitPackage(),
            new PhotoViewPackage(),
            new ReactMaterialKitPackage(),
            new LinearGradientPackage(),
            new ImagePickerPackage(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new RNSpinkitPackage(),
            new PhotoViewPackage(),
            new ReactMaterialKitPackage(),
            new LinearGradientPackage(),
            new ImagePickerPackage(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new RNSpinkitPackage(),
            new PhotoViewPackage(),
            new ReactMaterialKitPackage(),
            new LinearGradientPackage(),
            new ImagePickerPackage(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new RNSpinkitPackage(),
            new PhotoViewPackage(),
            new ReactMaterialKitPackage(),
            new LinearGradientPackage(),
            new ImagePickerPackage(),
            new RNSpinkitPackage(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new ImagePickerPackage(),
            new PhotoViewPackage(),
            new LinearGradientPackage(),
            new ReactMaterialKitPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
