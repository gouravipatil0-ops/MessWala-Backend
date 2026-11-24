import {
  CreditCard,
  X,
} from "lucide-react";

// import "./PaymentDetailModal.css";

const PaymentDetailModal = ({
  payment,
  onClose,
}) => {

  if (!payment) {
    return null;
  }


  return (

    <div className="payment-detail-overlay" className="md:fixed md:inset-0 md:z-[10000] md:flex md:items-center md:justify-center md:bg-[rgba(0,0,0,0.76)] md:p-[15px]">

      <div className="payment-detail-modal" className="md:w-full md:max-w-[405px] md:overflow-hidden md:rounded-[15px] md:bg-white md:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="payment-detail-header" className="md:flex md:h-[62px] md:items-center md:justify-between md:border-b md:border-solid md:border-b-[#f1eadb] md:px-[18px]">

          <div className="payment-detail-title" className="md:flex md:items-center md:gap-[8px] md:text-[#333333] md:text-[14px]">

            <CreditCard size={16} className="md:text-[#ff6500]"/>

            <span>
              Payment Detail
            </span>

          </div>


          <button
            type="button"
            className="payment-detail-close"
            className="md:border-none md:bg-transparent md:text-[#999999] md:cursor-pointer"
            onClick={onClose}
          >
            <X size={17} />
          </button>

        </div>


        {/* =====================================
            BODY
        ===================================== */}

        <div className="payment-detail-body" className="md:p-[17px_18px]">

          {/* CUSTOMER HEADER */}

          <div className="payment-detail-customer" className="md:mb-[14px] md:flex md:min-h-[65px] md:box-border md:items-center md:gap-[10px] md:rounded-[10px] md:bg-[#fffbea] md:p-[10px_14px]">

            <div className="payment-customer-avatar" className="md:flex md:h-[35px] md:w-[35px] md:shrink-0 md:items-center md:justify-center md:rounded-full md:bg-[#ffab00] md:text-[13px] md:text-white">

              {payment.customer
                .charAt(0)
                .toUpperCase()}

            </div>


            <div className="payment-customer-info" className="md:flex-1 md:min-w-0">

              <div className="payment-detail-name" className="md:mb-[2px] md:text-[#444444] md:text-[13px]">
                {payment.customer}
              </div>

              <div className="payment-detail-date" className="md:text-[#e85d04] md:text-[9px]">
                {payment.date}
              </div>

            </div>


            <span
              className={`{md:shrink-0 md:rounded-[10px] md:px-[9px] md:py-[4px] md:text-[9px] ${
                payment.status === "Completed"
                  ? "detail-status completed md:bg-[#d8f8df] md:text-[#149447]"
                  : "detail-status pending md:bg-[#ffdcdc] md:text-[#e23c3c]"
              }`}
            >
              {payment.status}
            </span>

          </div>


          {/* DETAILS GRID */}

          <div className="payment-details-grid" className="md:grid md:grid-cols-2 md:gap-[10px]">

            <div className="payment-detail-box" className="md:flex md:min-h-[63px] md:box-border md:flex-col md:justify-center md:rounded-[9px] md:bg-[#fffbea] md:p-[10px]">

              <span className="md:mb-[5px] md:text-[#d75b00] md:text-[9px]">
                Amount
              </span>

              <strong className="md:text-[#444444] md:text-[12px] md:font-normal">
                ₹{payment.amount.toLocaleString("en-IN")}
              </strong>

            </div>


            <div className="payment-detail-box" className="md:flex md:min-h-[63px] md:box-border md:flex-col md:justify-center md:rounded-[9px] md:bg-[#fffbea] md:p-[10px]">

              <span  className="md:mb-[5px] md:text-[#d75b00] md:text-[9px]">
                Payment Type
              </span>

              <strong className="md:text-[#444444] md:text-[12px] md:font-normal">
                {payment.type}
              </strong>

            </div>


            <div className="payment-detail-box" className="md:flex md:min-h-[63px] md:box-border md:flex-col md:justify-center md:rounded-[9px] md:bg-[#fffbea] md:p-[10px]">

              <span className="md:mb-[5px] md:text-[#d75b00] md:text-[9px]">
                Method
              </span>

              <strong className="md:text-[#444444] md:text-[12px] md:font-normal">
                {payment.method}
              </strong>

            </div>


            <div className="payment-detail-box" className="md:flex md:min-h-[63px] md:box-border md:flex-col md:justify-center md:rounded-[9px] md:bg-[#fffbea] md:p-[10px]">

              <span  className="md:mb-[5px] md:text-[#d75b00] md:text-[9px]">
                Transaction ID
              </span>

              <strong className="md:text-[#444444] md:text-[12px] md:font-normal md:break-all">
                {payment.transactionId || "—"}
              </strong>

            </div>


            <div className="payment-detail-box" className="md:flex md:min-h-[63px] md:box-border md:flex-col md:justify-center md:rounded-[9px] md:bg-[#fffbea] md:p-[10px]">

              <span  className="md:mb-[5px] md:text-[#d75b00] md:text-[9px]">
                Date
              </span>

              <strong className="md:text-[#444444] md:text-[12px] md:font-normal">
                {payment.date}
              </strong>

            </div>


            <div className="payment-detail-box" className="md:flex md:min-h-[63px] md:box-border md:flex-col md:justify-center md:rounded-[9px] md:bg-[#fffbea] md:p-[10px]">

              <span  className="md:mb-[5px] md:text-[#d75b00] md:text-[9px]">
                Status
              </span>

              <strong className="md:text-[#444444] md:text-[12px] md:font-normal">
                {payment.status}
              </strong>

            </div>

          </div>

        </div>


        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="payment-detail-footer" className="md:flex md:h-[65px] md:items-center md:justify-end md:border-t md:border-solid md:border-t-[#f1eadb] md:px-[18px]">

          <button
            type="button"
            className="md:border-none md:bg-transparent md:text-[#666666] md:text-[11px] md:cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>

  );
};

export default PaymentDetailModal;