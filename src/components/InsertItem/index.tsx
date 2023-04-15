import { FC, useContext } from "react";

import useInputData from "../../hooks/useInsertItemData";
import StepContext from "../../contexts/StepContext";

import { ButtonRow, FormRow, InputWrapper, Form, InputRow } from "./styles";
import { ButtonPrimary, ButtonSecondary, Col } from "../../styles/app";
import Loader from "../Loader";

const InsertItem: FC = () => {
  const {
    handleSubmit,
    onSubmit,
    errors,
    register,
    calcErrors,
    calculate,
    loading,
  } = useInputData();

  if (loading) return <Loader />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Col>
          <InputRow>
            <InputWrapper>
              <label htmlFor="height">Height (m):</label>
              <input id="height" {...register("height")} type="text" />
              {errors.height && <p>{errors.height.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="width">Width (m):</label>
              <input id="width" {...register("width")} type="text" />
              {errors.width && <p>{errors.width.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="length">Length:</label>
              <input id="length" {...register("length")} type="text" />
              {errors.length && <p>{errors.length.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="quantity">Quantity:</label>
              <input id="quantity" {...register("quantity")} type="text" />
              {errors.quantity && <p>{errors.quantity.message}</p>}
            </InputWrapper>
          </InputRow>
          <ButtonRow>
            <ButtonPrimary type="button" onClick={() => calculate()}>
              Calculate
            </ButtonPrimary>
            <ButtonSecondary type="submit">Insert Item</ButtonSecondary>
            {calcErrors && <p>{calcErrors}</p>}
          </ButtonRow>
        </Col>
      </FormRow>
    </Form>
  );
};

export default InsertItem;
