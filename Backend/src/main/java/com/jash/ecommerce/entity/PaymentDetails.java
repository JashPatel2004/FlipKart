package com.jash.ecommerce.entity;

public class PaymentDetails {
    private String paymentMethod;
    private String status;
    private String paymentId;
    private String razorPayPaymentLinkId;
    private String razorPayPaymentLinkRefrenceId;
    private String razorPayPaymentLinkStatus;
    private String razorPayPaymentId;

    PaymentDetails(){

    }

    public PaymentDetails(String paymentMethod, String status, String paymentId, String razorPayPaymentLinkId, String razorPayPaymentLinkRefrenceId, String razorPayPaymentLinkStatus, String razorPayPaymentId) {
        this.paymentMethod = paymentMethod;
        this.status = status;
        this.paymentId = paymentId;
        this.razorPayPaymentLinkId = razorPayPaymentLinkId;
        this.razorPayPaymentLinkRefrenceId = razorPayPaymentLinkRefrenceId;
        this.razorPayPaymentLinkStatus = razorPayPaymentLinkStatus;
        this.razorPayPaymentId = razorPayPaymentId;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getRazorPayPaymentLinkId() {
        return razorPayPaymentLinkId;
    }

    public void setRazorPayPaymentLinkId(String razorPayPaymentLinkId) {
        this.razorPayPaymentLinkId = razorPayPaymentLinkId;
    }

    public String getRazorPayPaymentLinkRefrenceId() {
        return razorPayPaymentLinkRefrenceId;
    }

    public void setRazorPayPaymentLinkRefrenceId(String razorPayPaymentLinkRefrenceId) {
        this.razorPayPaymentLinkRefrenceId = razorPayPaymentLinkRefrenceId;
    }

    public String getRazorPayPaymentLinkStatus() {
        return razorPayPaymentLinkStatus;
    }

    public void setRazorPayPaymentLinkStatus(String razorPayPaymentLinkStatus) {
        this.razorPayPaymentLinkStatus = razorPayPaymentLinkStatus;
    }

    public String getRazorPayPaymentId() {
        return razorPayPaymentId;
    }

    public void setRazorPayPaymentId(String razorPayPaymentId) {
        this.razorPayPaymentId = razorPayPaymentId;
    }
}
